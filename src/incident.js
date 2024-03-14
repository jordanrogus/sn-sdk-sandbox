import { GlideRecord } from '@servicenow/glide'
import { gs } from '@servicenow/glide'

export const getIncidentCount = function () {
    let incidentGr = new GlideRecord("incident");
    incidentGr.query();
    gs.addInfoMessage(incidentGr.getRowCount());
}

export const getIncidentNumbers = function () {
    let incidentNumbers = [];
    let incidentGr = new GlideRecord("incident");
    incidentGr.query();
    while (incidentGr.next()){
        incidentNumbers.push(incidentGr.getDisplayValue());
    }
    gs.addInfoMessage(incidentNumbers.toString());
}

// TBD too