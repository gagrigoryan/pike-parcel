import React from "react";
import styles from "../../components/form-page/formPage.module.scss";
import { PageBlock } from "../../components/page-layout/PageBlock";
import { FormStep2 } from "../../components/form/FormStep2";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { FormLayout } from "../../components/form-page/FormLayout";

const FormPage2: React.FC = () => {
    const { actions, state } = useStateMachine({ updateAction });
    return (
        <FormLayout>
            <div className={styles.form2Container}>
                <PageBlock>
                    <FormStep2 actions={actions} state={state} />
                </PageBlock>
            </div>
        </FormLayout>
    );
};

export default FormPage2;
