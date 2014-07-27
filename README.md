# No `autocomplete="off"`

This Chrome extension removes `autocomplete="off"` attribute from forms and input elements to let Chrome use it's Autocomplete features.

Some banks try to force `autocomplete="off"` even when user has a plug-in to not allow it. They add a delayed script to put `autocomplete="off"` back on elements even after plug-ins removed it. 

This plug-in will install an observer on elements that have this attribute to remove the `autocomplete="off"` even if a delayed script adds it back. 
