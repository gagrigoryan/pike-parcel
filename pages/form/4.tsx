import React from "react";
import styles from "../../components/form-page/formPage.module.scss";
import { PageBlock } from "../../components/page-layout/PageBlock";
import { FormStep4 } from "../../components/form/FormStep4";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { resetAction } from "../../utils/resetAction";
import { FormLayout } from "../../components/form-page/FormLayout";

const FormPage4: React.FC = () => {
    const { actions, state } = useStateMachine({ updateAction, resetAction });

    return (
        <FormLayout>
            <div className={styles.form4Container}>
                <PageBlock>
                    <FormStep4 actions={actions} state={state} />
                </PageBlock>
            </div>
        </FormLayout>
    );
};

export default FormPage4;
