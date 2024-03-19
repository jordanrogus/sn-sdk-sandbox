import { GlideRecord } from '@servicenow/glide'
import { compact } from 'lodash'

export const getIncidentCount = function () {
    let incidentGr = new GlideRecord("incident");
    incidentGr.query();
    return incidentGr.getRowCount();
}

export const getIncidentNumbers = function (userSysId) {
    let incidentNumbers = [];
    let incidentGr = new GlideRecord("incident");
    incidentGr.addQuery("caller_id", userSysId);
    incidentGr.query();
    while (incidentGr.next()){
        incidentNumbers.push(incidentGr.getDisplayValue());
    }
    incidentNumbers.push(false);
    incidentNumbers.push("");
    return incidentNumbers;
}

export const cleanIncidentNumbers = function (userSysId) {
    return compact(this.getIncidentNumbers(userSysId));
}