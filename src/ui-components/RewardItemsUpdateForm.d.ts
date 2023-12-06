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
export declare type RewardItemsUpdateFormInputValues = {
    RewardName?: string;
    RewardCost?: number;
};
export declare type RewardItemsUpdateFormValidationValues = {
    RewardName?: ValidationFunction<string>;
    RewardCost?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RewardItemsUpdateFormOverridesProps = {
    RewardItemsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RewardName?: PrimitiveOverrideProps<TextFieldProps>;
    RewardCost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RewardItemsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RewardItemsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rewardItems?: any;
    onSubmit?: (fields: RewardItemsUpdateFormInputValues) => RewardItemsUpdateFormInputValues;
    onSuccess?: (fields: RewardItemsUpdateFormInputValues) => void;
    onError?: (fields: RewardItemsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RewardItemsUpdateFormInputValues) => RewardItemsUpdateFormInputValues;
    onValidate?: RewardItemsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RewardItemsUpdateForm(props: RewardItemsUpdateFormProps): React.ReactElement;
