//librery or import 
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

export function FooterAccount(props) {

    let state_footer_accounts = props.properties;

    return (
        <div className={state_footer_accounts['cls-1']}>
            <GitHubIcon className={state_footer_accounts['cls-2']} />
        </div>
    )

}