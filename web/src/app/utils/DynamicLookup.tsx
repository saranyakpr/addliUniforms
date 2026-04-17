import { Autocomplete, type AutocompleteProps } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";

interface DynamicProps extends AutocompleteProps {
    endpoint: string;
    labelKey?: string;
}

const DynamicAutoComplete = ({
    endpoint,
    labelKey = "name",
    required,
    ...props
}: DynamicProps) => {

    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    const fetchData = async () => {
        const res = await axios.get(endpoint);
        const options = res.data.map((item: any) => item[labelKey]);
        setData(options);
    };

    const validate = (val: string) => {
        if (required && !val) {
            setError("This field is mandatory");
        } else {
            setError(null);
        }
    };

    return (
        <Autocomplete
            data={data}
            value={value}
            required={required}
            error={error}
            {...props}
            onChange={(val) => {
                setValue(val);
                validate(val);
                props.onChange?.(val);
            }}
            onDropdownOpen={() => setTouched(true)}
            onBlur={() => {
                if (touched) {
                    validate(value);
                }
            }}
            onClear={() => {
                setValue("");
                validate("");
            }}
        />
    );
};

export default DynamicAutoComplete;