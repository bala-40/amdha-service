import { Request, Response } from "express";
import { createDyteMeeting, deactivateDyteMeeting } from "../helpers/dyteHelper";

export async function createDyteMeetingController(req : Request, res : Response) {
    try {

        let body = req.body;

        let resp = await createDyteMeeting(body);

        return res.status(200).json(resp);

    } catch (e) {

        console.log(`Error ${req.method} @dyteMeetings : get ${JSON.stringify(e)}`);
        return res.status(500).json({ message: `Something went wrong` });
    }   
}

export async function deactivateDyteMeetingController(req : Request, res : Response) {
    try {
        
        let {meeting_id} = req.query;

        if(!meeting_id) throw `meeting ID required`

        let resp = await deactivateDyteMeeting(meeting_id.toString());

        return res.status(200).json(resp);

    } catch (e) {
        
        console.log(`Error ${req.method} @dyteMeetings : get ${JSON.stringify(e)}`);
        return res.status(500).json({ message: `Something went wrong` });
    }
}