// Copyright 2017-2023 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { useTranslation } from '../translate.js';
import { styled, Toggle, Badge, AccountName, LabelHelp, IdentityIcon, Card } from '@polkadot/react-components';
import { Item, Label } from 'semantic-ui-react'
import CopyInline from '../shared/CopyInline.js';
import { useToggle } from '@polkadot/react-hooks';

interface Props {
    className?: string;
    onClear?: () => void;
    fromAcct: string;
    timeDate: Date;
    callFrom?: number;
  }
    // Indexing for Account Header: callFrom===??
    // 000 Life and Work
    // 100 Profile
    // 200 Social
    // 300 Private Message Exchange
    // 400 Market
    // 500 Coin Exchange
    // 600 Referrals
    // 700 Reporting
    // 800 Faucet

function AccountHeader ({ className = '', fromAcct, timeDate, callFrom }: Props): React.ReactElement<Props> | null {
    const { t } = useTranslation();
    const [isShowInfo, toggleShowInfo] = useToggle(false);
    const [isShowCallAccount, toggleShowCallAccount] = useToggle(false);
    // local helper functions
    function t_strong(_str: string): JSX.Element{return(<><strong>{t(_str)}</strong></>)}

function ListAccount(): JSX.Element {
  try {
    return (
      <div>
        <Item.Content>
          <Item.Description> 
          
          {' '}{timeDate.toLocaleDateString()} 
          {' '}{timeDate.toLocaleTimeString()} 
          
          </Item.Description>
        </Item.Content>
       
        {callFrom!=99 && (<>
          <Toggle
            className='info-callaccount'
            label={<><strong>{t(' user: ')}</strong>
            {isShowCallAccount && (
              <>
              {' called from User Account: '}
              <IdentityIcon size={24} value={fromAcct} />
             {' '}
             <AccountName value={fromAcct} withSidebar={true}/>
             <LabelHelp help={t(' The account calling the information. ')} /> 
              </>
            )}
            </>}
            onChange={toggleShowCallAccount}
            value={isShowCallAccount}
            />
        </>)}
        {callFrom!=99 && (<>
          <Toggle
            className='info-toggle'
            label={<><strong>{t(' Key: ')}</strong>
            {isShowInfo && (
              <>
                {(callFrom===1 || callFrom===2 || callFrom===0) && (<>
                {t(' Link to See More: ')}
                <Label circular color='orange'> Link </Label>  
                </>)}
                {(callFrom===1 || callFrom===0) && (<>
                {t(' No. of Endorsements: ')}
                <Label circular color='blue'>{'#'}</Label>  
                {t(' Endorse a Post: ')}
                <Badge icon='thumbs-up' color='blue' /> 
                {t(' Copy a message ID: ')}
                <Badge icon='copy' color='orange' /> 
                </>)}
                {callFrom===2 || callFrom===4 && (<>
                {t(' Copy Address: ')}
                <Badge icon='copy' color='orange' /> 
                </>)}
                {callFrom===3 && (<>
                {t(' Link to See More: ')}
                <Label circular color='orange'> Link </Label>
                {t(' No. of Endorsements: ')}
                <Label circular color='blue'>{'#'}</Label>  
                {t(' See Replies: ')}
                <Label color='orange' circular >{'Replies #'}</Label>  
                {t(' Endorse a Post: ')}
                <Badge icon='thumbs-up' color='blue' />
                {t(' Copy Message ID: ')}
                <CopyInline value={' '} label={''}/>  
                {t('Reply to a Post')}
                <Label color='orange' circular>{'Reply'}</Label>              
                </>)}
                {callFrom===1 && (<><br />
                <strong>{t('NOTE: ')}</strong>
                {t('You can have 20 claims for each claim type except for Work History where you can have 10.  ')}<br />
                {t('All claims greater than the limit will be stored on chain but are not displayed. ')}
                </>)}
                {callFrom===100 && (<>
                {t(' Link to See More: ')}<Label circular color='orange'> Link </Label>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                  <strong>{t('NOTE: ')}</strong>
                {t('👤 View a Profile.   ')}<br />
                {' 🔘 '}{t('You can update your own profile here.')}<br />
                {' 🔘 '}{t('Copy public key addresses to use in other Geode Apps.')}<br />
                {' 🔘 '}{t('Click on the links to see more info for this profile. ')}<br />
                </>)}

                {callFrom===31 && (<>
                {t(' Link to See More: ')}<Label circular color='orange'> Link </Label><br />
                  <strong>{t('NOTE: ')}</strong>
                {' 🏆 '}{t(' This application provides random awards for sending private messages.')}<br />
                {t('📨 Send messages to people directly by clicking on the blue envelop icon button ( ✉️ ).   ')}<br />
                {' 🔘 '}{t('Click the ( messages ✉️ ) button to see your conversations.')}<br />
                {' 🔘 '}{t('ALL messages are 100% private and are NOT written to the chain.')}<br />
                {' 🔘 '}{t('You can delete messages by clicking on the ( x ) next to the message. ')}<br />
                {' 🔘 '}{t('Deleted messages can not be retrieved.')}<br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates to your messages remember to reload this page.')}
                
                </>)}
                {callFrom===32 && (<>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                  <strong>{t('NOTE: ')}</strong>
                {t('These are the user settings for the selected account.   ')}<br />
                {' 🔘 '}{t('Go to update settings to make changes to an account`s user settings. ')}<br />
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates to your user settings remember to reload this page.')}
                </>)}
                {callFrom===33 && (<>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                  <strong>{t('NOTE: ')}</strong>
                {t('Manage the accounts that you can receive and send messages.   ')}<br />
                {t('You can do the following here:')}<br />
                {' 🔘 '}{t('Add Accounts to Your Inbox. ')}<br />
                {' 🔘 '}{t('Remove Accounts from Your Inbox. ')}<br />
                {' 🔘 '}{t('Unblock Accounts from Your Inbox. ')}<br />
                {' 🔘 '}{t('Delete All Messages to another User. ')}<br />
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===34 && (<>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                <strong>{t('NOTE: ')}</strong>
                {' 🏆 '}{t(' This application provides random awards for sending messages to a group.')}<br />
                {t('Send a message to the Group by clicking the blue envelop icon ( ✉️ ).')}<br />
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('Check your Group Messages. ')}<br />
                {' 🔘 '}{t('Send a message to the Group. ')}<br />
                {' 🔘 '}{t('Click the ( messages ✉️ ) button to see your conversations.')}<br />
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===35 && (<>
                {t(' Number of Lists that contain messages: ')}<Badge icon='1' color='blue' /><br />
                  <strong>{t('NOTE: ')}</strong>
                {t(' You can do the following here:')}<br />
                {' 🔘 '}{t('Check your mail lists. ')}<br />
                {' 🔘 '}{t('Click the ( messages ✉️ ) button to see your list messages.')}<br />
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===36 && (<>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                {t_strong('NOTE: ')}
                {' 🏆 '}{t(' This application provides random awards for sending messages to a group.')}<br />
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('Review Your Groups. ')}<br />
                {' 🔘 '}{t('See the accounts subscribed to the Groups.')}<br />
                {' 🔘 '}{t('Send a Message to a Group (Click Send to Group).')}<br />
                {' 🔘 '}{t('Delete Your Messages sent to a Group (Delete Sent).')}<br />
                {' 🔘 '}{t('Update Your Group Settings if you are the Group owner (Update Group).')}<br />
                {' 🔘 '}{t('Leave a Group (Leave Group).')}<br />
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===37 && (<>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                {' 🏆 '}{t(' This application provides random awards for making a Group and Joining a Group.')}<br />
                {t_strong('NOTE: ')}<br />
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('Join a Group. ')}<br />
                {' 🔘 '}{t('Leave a Group.')}<br />
                {' 🔘 '}{t('Create a new Group')}<br />
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===38 && (<>
                {t(' Copy an Address: ')}<Badge icon='copy' color='orange' /><br />
                {' 🏆 '}{t(' This application provides random awards for making a list and sending messages to a List.')}<br />
                {t_strong('NOTE: ')}
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('Send a Message to a List that you own. ')}<br />
                {' 🔘 '}{t('Delete a List.')}<br />
                {' 🔘 '}{t('Create a new List')}<br />
                {' ‼️ '}{t('Only the List Owner can send messages to a List.')}
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===39 && (<>
                {t(' Copy an Address or List Id: ')}<Badge icon='copy' color='orange' /><br />
                {' 🏆 '}{t(' This application provides random awards for joining a list.')}<br />
                {t_strong('NOTE: ')}
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('Sort and find lists to join. ')}<br />
                {' 🔘 '}{t('Unsubscribe to a list')}<br />
                {' ‼️ '}{t('Only the List Owner can send messages to a List.')}
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===310 && (<>
                {t(' Copy an Address or List Id: ')}<Badge icon='copy' color='orange' /><br />
                {t_strong('NOTE: ')}
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('View your subscribed lists. ')}<br />
                {' 🔘 '}{t('Unsubscribe to a list.')}<br />
                {' 🔘 '}{t('To send a message to your list or create a new list go to (My Lists).')}<br />
                {' ‼️ '}{t('Only the List Owner can send messages to a List.')}
                <br />
                {t_strong('IMPORTANT: ')}{t('To see recent updates remember to reload this page.')}
                </>)}
                {callFrom===311 && (<>
                {t(' Copy a Message Id: ')}<Badge icon='copy' color='orange' /><br />
                {t(' Link to See More: ')}<Label circular color='orange'> Link </Label><br />
                {' 🏆 '}{t(' This application pays out directly for reading messages in your Paid Inbox.')}<br />
                {t_strong('NOTE: ')}
                {t(' ✉️ You can do the following here:')}<br />
                {' 🔘 '}{t('Read your paid messages. ')}<br />
                {' 🔘 '}{t('Send a paid message to an address. ')}<br />
                {' 🔘 '}{t('Get paid for your Paid Messages.')}<br />
                {' 🔘 '}{t('Clear your Paid Message Inbox.')}
                <br />
                </>)}
              </>
              
            )}
            </>}
            onChange={toggleShowInfo}
            value={isShowInfo}
            />
        </>)}
      </div>
    )
  } catch(error) {
    console.error(error)
    return(
      <div>
          <strong>{t('There is no information available.')}</strong>
          <strong>{t(' | Date/Time: ')}</strong>
            {' '}{timeDate.toLocaleDateString()} 
            {' '}{timeDate.toLocaleTimeString()} 
      </div>
    )
  }}

  
return (
    <StyledDiv className={className}>
    <Card>
    <ListAccount />
    </Card>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  align-items: center;
  display: flex;

  .output {
    flex: 1 1;
    margin: 0.25rem 0.5rem;
  }
`;
export default React.memo(AccountHeader);