import React from "react";
import styles from "../../components/form-page/formPage.module.scss";
import { PageBlock } from "../../components/page-layout/PageBlock";
import { FormStep3 } from "../../components/form/FormStep3";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { FormLayout } from "../../components/form-page/FormLayout";

const FormPage3: React.FC = () => {
    const { actions, state } = useStateMachine({ updateAction });

    return (
        <FormLayout>
            <div className={styles.form3Container}>
                <PageBlock>
                    <FormStep3 actions={actions} state={state} />
                </PageBlock>
            </div>
        </FormLayout>
    );
};

export default FormPage3;
