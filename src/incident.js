import { GlideRecord } from '@servicenow/glide'
import { gs } from '@servicenow/glide'
import { compact } from 'lodash'

export const getIncidentCount = function () {
    let incidentGr = new GlideRecord("incident");
    incidentGr.query();
    return incidentGr.getRowCount();
}

export const getIncidentNumbers = function () {
    let incidentNumbers = [];
    let incidentGr = new GlideRecord("incident");
    incidentGr.query();
    while (incidentGr.next()){
        incidentNumbers.push(incidentGr.getDisplayValue());
    }
    incidentNumbers.push(false);
    incidentNumbers.push("");
    return incidentNumbers;
}

export const cleanIncidentNumbers = function () {
    return compact(this.getIncidentNumbers());
}