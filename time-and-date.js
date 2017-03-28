var katescript = {
    "author": "Brian Donovan",
    "license": "BSD",
    "revision": 1,
    "kate-version": "0",
    "functions": ["insertDatestamp", "insertDateTimestamp"],
    "actions": [
        {   "function": "insertDatestamp",
            "name": "Insert the current date",
            "category": "Brian's Utility Belt"
        },
        {   "function": "insertDateTimestamp",
            "name": "Insert the current date and time",
            "category": "Brian's Utility Belt"
        }

    ]
}; // kate-script-header, must be at the start of the file without comments, pure json

require ("range.js");
require ("documentcursor.js");

function insertDatestamp(){
    debug('insertDatestamp called!');
    var objDateTime = new Date(Date.now());
    var str4digitYear = objDateTime.getUTCFullYear().toString();
    var str2digitMonth = objDateTime.getUTCMonth().toString();
    if (str2digitMonth.length === 1) {
        str2digitMonth = '0' + str2digitMonth;
    }
    var str2digitDate = objDateTime.getUTCDate().toString();
    if (str2digitDate.length === 1) {
        str2digitDate = '0' + str2digitDate;
    }
    var strDatestamp = str4digitYear+str2digitMonth+str2digitDate;
    return true;
}

function insertDateTimestamp(){
    //debug('insertDateTimestamp called!');
    var objDateTime = new Date(Date.now());
    var strDateTimestamp = objDateTime.toLocaleDateString();
    //debug(strDateTimestamp);
    //debug(view.cursorPosition().line);
    //debug(view.cursorPosition().column);
    document.editBegin();
    document.insertText((view.cursorPosition().line, view.cursorPosition().column), strDateTimestamp);
    //alert(strDateTimestamp);
    document.editEnd();
    return true;
}
