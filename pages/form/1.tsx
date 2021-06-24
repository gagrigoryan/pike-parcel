import React from "react";
import styles from "../../components/form-page/formPage.module.scss";
import { PageBlock } from "../../components/page-layout/PageBlock";
import { Form } from "../../components/form/Form";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../utils/updateAction";
import { FormLayout } from "../../components/form-page/FormLayout";

const FormPage: React.FC = () => {
    const { actions, state } = useStateMachine({ updateAction });
    return (
        <FormLayout>
            <div className={styles.container}>
                <PageBlock>
                    <Form actions={actions} state={state} />
                </PageBlock>
            </div>
        </FormLayout>
    );
};

export default FormPage;
