import { Request, Response } from "express";
import { addParticipantToAzureMeeting, createAzureMeeting } from "../helpers/azureHelper";
import _ from "lodash";

export async function createAzureMeetingController(req: Request, res: Response) {
    try {

        let body = req.body;

        let resp = await createAzureMeeting(body);

        return res.status(200).json(resp);

    } catch (e) {
        console.log(`Error ${req.method} @azureMeetings : get ${JSON.stringify(e)}`);
        return res.status(500).json({ message: `Something went wrong` });
    }
}

export async function addParticipantToAzureMeetingController(req: Request, res: Response) {
    try {
        let participantIdentity: any = _.get(req.body, "participant_identity");
        let meetingId: any = _.get(req.body, "meeting_id");
        let role: any = _.get(req.body, "role");
        if (participantIdentity && meetingId) {
            let resp = await addParticipantToAzureMeeting({ meetingId, participantIdentity, role });
            return res.status(200).json(resp)
        } else throw `participantIdentity && meetingId required`
    } catch (e) {
        console.log(`Error ${req.method} @azureTokens : get ${JSON.stringify(e)}`);
        return res.status(200).json({ message: `Something went wrong` });
    }
}