import { FileInput, NumberInput, Select, TextInput } from '@mantine/core';
import { Upload, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { toast } from 'sonner';
import { UniformFormValues } from '../..';

interface HomePageFormProps {
    onSuccess?: () => void;
    isOpen?: boolean;
}

const HomePageForm = ({ onSuccess, isOpen }: HomePageFormProps) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid }
    } = useForm<UniformFormValues>({ mode: "onChange", reValidateMode: "onChange" });

    // Reset form when drawer opens
    useEffect(() => {
        if (isOpen) {
            reset();
            setIsSubmitted(false);
        }
    }, [isOpen, reset]);

    const onSubmit = (data: UniformFormValues) => {
        console.log("Form Data:", data);
        
        // Clear form data immediately
        reset();
        setIsSubmitted(true);
        toast.success('Submitted Successfully');
        
        // Close drawer after a short delay
        setTimeout(() => {
            if (onSuccess) {
                onSuccess();
            }
        }, 800);
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
                {isSubmitted && (
                    <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                        Submitted Successfully
                    </div>
                )}
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
                    disabled={!isValid || isSubmitted}
                    type="submit"
                    className={`mt-5 w-full py-3 px-4 cursor-pointer rounded-xl font-semibold text-sm transition-all duration-200 ${
                        isValid
                            ? 'bg-accent text-white hover:bg-accent/90 active:scale-[0.98]'
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
