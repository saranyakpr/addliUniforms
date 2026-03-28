import { FileInput, NumberInput, Select, TextInput } from '@mantine/core';
import { Upload, Users } from 'lucide-react';
import { useForm, Controller } from "react-hook-form";
import { UniformFormValues } from '../..';

const HomePageForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid }
    } = useForm<UniformFormValues>({ mode: "onChange", reValidateMode: "onChange" });

    const onSubmit = (data: UniformFormValues) => {
        console.log("Form Data:", data);
    };

    return (
        <div>
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-foreground">Uniform Consultation</p>
                    <p className="text-xs text-muted-foreground">Tell us what your team needs</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4">
                    <TextInput
                        placeholder="Your name"
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 3, message: "Minimum 3 characters" }
                        })}
                        error={errors.name?.message}
                    />
                    <TextInput
                        placeholder="Your group / company name"
                        {...register("groupName", {
                            required: "Group name required"
                        })}
                        error={errors.groupName?.message}
                    />
                    <TextInput
                        placeholder="Your email"
                        {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email"
                            }
                        })}
                        error={errors.email?.message}
                    />
                    <TextInput
                        placeholder="Phone number"
                        {...register("phone", {
                            required: "Phone number required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter valid 10 digit number"
                            }
                        })}
                        error={errors.phone?.message}
                    />
                    <Controller
                        name="uniformType"
                        control={control}
                        rules={{ required: "Select uniform type" }}
                        render={({ field }) => (
                            <Select
                                placeholder="Uniform Type"
                                data={['Corporate', 'Hotel', 'Spa', 'Hospital', 'T-Shirts', 'By-Profession', 'Other']}
                                {...field}
                                clearable
                                error={errors.uniformType?.message}
                            />
                        )}
                    />
                    <Controller
                        name="quantity"
                        control={control}
                        rules={{
                            required: "Quantity required",
                            min: { value: 1, message: "Minimum 1 required" }
                        }}
                        render={({ field }) => (
                            <NumberInput
                                placeholder="Uniform Quantity"
                                {...field}
                                error={errors.quantity?.message}
                            />
                        )}
                    />
                    <div>
                        <p className="text-[11px] text-muted-foreground mb-1.5">
                            Upload reference image (optional)
                        </p>
                        <Controller
                            name="file"
                            control={control}
                            rules={{ required: "File required" }}
                            render={({ field }) => (
                                <FileInput
                                    leftSection={<Upload size={16} />}
                                    placeholder="Choose file"
                                    leftSectionPointerEvents="none"
                                    {...field}
                                    error={errors.file?.message}
                                />
                            )}
                        />
                    </div>
                </div>

                <button
                    disabled={!isValid}
                    type="submit"
                    className={`mt-5 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isValid
                            ? 'bg-primary text-white hover:bg-primary/90 active:scale-[0.98]'
                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default HomePageForm;
