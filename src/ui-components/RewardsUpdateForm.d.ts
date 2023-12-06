/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RewardsUpdateFormInputValues = {
    RewardName?: string;
    RewardCost?: number;
};
export declare type RewardsUpdateFormValidationValues = {
    RewardName?: ValidationFunction<string>;
    RewardCost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardsUpdateFormOverridesProps = {
    RewardsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RewardName?: PrimitiveOverrideProps<TextFieldProps>;
    RewardCost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RewardsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RewardsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rewards?: any;
    onSubmit?: (fields: RewardsUpdateFormInputValues) => RewardsUpdateFormInputValues;
    onSuccess?: (fields: RewardsUpdateFormInputValues) => void;
    onError?: (fields: RewardsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardsUpdateFormInputValues) => RewardsUpdateFormInputValues;
    onValidate?: RewardsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RewardsUpdateForm(props: RewardsUpdateFormProps): React.ReactElement;
