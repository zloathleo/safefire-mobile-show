import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { Chip, Avatar } from 'material-ui';
import SvgIconVerifiedUser from 'material-ui/svg-icons/action/verified-user';

import IconOverview from 'material-ui/svg-icons/action/dashboard';
import IconAbout from 'material-ui/svg-icons/places/all-inclusive';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


const styles = {
    logo: {
        backgroundImage: 'url("../assets/image/powermax-200.png")',
        backgroundRepeat: 'no-repeat',
        height: '41px',
        backgroundSize: '80%',
        marginTop: '180%',
        marginLeft: '18%'
    }
};

const MyDrawerContent = () => (
    <div>
        <div style={{ marginTop: '10%', marginBottom: '10%', marginLeft: '26%' }}>
            <Chip backgroundColor={'#424242'} >
                <Avatar
                    backgroundColor={'#424242'}
                    icon={<SvgIconVerifiedUser />} />
                Guest
            </Chip>
        </div>
        <List>
            <ListItem primaryText="Overview" rightIcon={<IconOverview />} />
            <ListItem primaryText="ToDo" rightIcon={<ActionGrade />} />
            <ListItem primaryText="ToDo" rightIcon={<ContentSend />} />
            <ListItem primaryText="ToDo" rightIcon={<ContentDrafts />} />
            <ListItem primaryText="About" rightIcon={<IconAbout />} />
        </List>
        <div style={styles.logo} />
    </div>
);

export default MyDrawerContent;