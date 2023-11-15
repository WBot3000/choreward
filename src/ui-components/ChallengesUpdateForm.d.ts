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
export declare type ChallengesUpdateFormInputValues = {
    ChallengeList?: string;
    Family1Name?: string;
    Family2Name?: string;
    EndTime?: string;
    RwardPoints?: number;
};
export declare type ChallengesUpdateFormValidationValues = {
    ChallengeList?: ValidationFunction<string>;
    Family1Name?: ValidationFunction<string>;
    Family2Name?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
    RwardPoints?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChallengesUpdateFormOverridesProps = {
    ChallengesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ChallengeList?: PrimitiveOverrideProps<TextFieldProps>;
    Family1Name?: PrimitiveOverrideProps<TextFieldProps>;
    Family2Name?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
    RwardPoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChallengesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChallengesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    challenges?: any;
    onSubmit?: (fields: ChallengesUpdateFormInputValues) => ChallengesUpdateFormInputValues;
    onSuccess?: (fields: ChallengesUpdateFormInputValues) => void;
    onError?: (fields: ChallengesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChallengesUpdateFormInputValues) => ChallengesUpdateFormInputValues;
    onValidate?: ChallengesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChallengesUpdateForm(props: ChallengesUpdateFormProps): React.ReactElement;
