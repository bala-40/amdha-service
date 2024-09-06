import { CommunicationIdentityClient, TokenScope } from '@azure/communication-identity';
import { RoomsClient, CreateRoomOptions, CommunicationRoom } from '@azure/communication-rooms';
import { Constants } from './constants';
import { CallAutomationClient } from '@azure/communication-call-automation';

const connectionString: string = Constants.URLS.ACS_CONNECTION_STRING;

const roomsClient = new RoomsClient(connectionString);
const communicationIdentityClient = new CommunicationIdentityClient(connectionString);


export const AcsUtils = {
    roomsClient,
    communicationIdentityClient,
    createIdentity: async (scope?: TokenScope[]) => {
        scope = scope ? scope : ['chat', 'voip'];
        const result = await communicationIdentityClient.createUserAndToken(scope);
        return {
            identity: result.user.communicationUserId,
            token: result.token,
            expiresOn: result.expiresOn
        }
    }

}