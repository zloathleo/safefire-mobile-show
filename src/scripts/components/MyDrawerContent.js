import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Chip, Avatar } from 'material-ui';
import SvgIconVerifiedUser from 'material-ui/svg-icons/action/verified-user';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const MyDrawerContent = () => (
    <div>
        <div style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '10%', marginRight: '0px' }}>
            <Chip backgroundColor={'#424242'} >
                <Avatar
                    backgroundColor={'#424242'}
                    icon={<SvgIconVerifiedUser />} />
                Guest
            </Chip>
        </div>

        <List>
            <ListItem primaryText="Overview" rightIcon={<ContentInbox />} />
            <ListItem primaryText="ToDo" rightIcon={<ActionGrade />} />
            <ListItem primaryText="ToDo" rightIcon={<ContentSend />} />
            <ListItem primaryText="ToDo" rightIcon={<ContentDrafts />} />
            <ListItem primaryText="ToDo" rightIcon={<ContentInbox />} />
        </List>
    </div>
);

export default MyDrawerContent;