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
export declare type CommentsCreateFormInputValues = {
    Date?: string;
    UserID?: string;
    Content?: string;
};
export declare type CommentsCreateFormValidationValues = {
    Date?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentsCreateFormOverridesProps = {
    CommentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentsCreateFormProps = React.PropsWithChildren<{
    overrides?: CommentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommentsCreateFormInputValues) => CommentsCreateFormInputValues;
    onSuccess?: (fields: CommentsCreateFormInputValues) => void;
    onError?: (fields: CommentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentsCreateFormInputValues) => CommentsCreateFormInputValues;
    onValidate?: CommentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommentsCreateForm(props: CommentsCreateFormProps): React.ReactElement;
