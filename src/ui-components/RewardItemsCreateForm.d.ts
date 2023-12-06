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
export declare type RewardItemsCreateFormInputValues = {
    RewardName?: string;
    RewardCost?: number;
};
export declare type RewardItemsCreateFormValidationValues = {
    RewardName?: ValidationFunction<string>;
    RewardCost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardItemsCreateFormOverridesProps = {
    RewardItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RewardName?: PrimitiveOverrideProps<TextFieldProps>;
    RewardCost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RewardItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: RewardItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RewardItemsCreateFormInputValues) => RewardItemsCreateFormInputValues;
    onSuccess?: (fields: RewardItemsCreateFormInputValues) => void;
    onError?: (fields: RewardItemsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardItemsCreateFormInputValues) => RewardItemsCreateFormInputValues;
    onValidate?: RewardItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RewardItemsCreateForm(props: RewardItemsCreateFormProps): React.ReactElement;
