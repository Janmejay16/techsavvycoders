/*
User
    - User Id
    - *Name
    - *Email
    - *Mobile
    - *Password
    - Profile Pic {blob}
    - Social Links {array}
        - Name
        - Url
    - Education {array}
        - name
        - graduation
        - qualification
        - major
    - Experience {array}
        - company
        - role
        - duration
        - work
    - *Skills {array - string}
    - Notifications via Email {boolean, default:false}
    - Verified {boolean, default: false}
*/

/*
Projects
    - Project Id
    - User Id
    - Owner name
    - *Prjct name
    - *Desc
    - Url
    - *tags {array - string}
    - collaborators {array - names(string)}
    - images {array - blob}
    - completed {boolean: false}
    - requirementsSatisfied {boolean, default: false}
*/

/*
Collaborators
    - Project Id
    - Collab Id
    - User Id
    - Role
*/

/*
Notifications [Apply as collab, req for collab, Accept/Decline]
    - User Id
    - Project Id
    - Desc {abstract}
    - seen {boolean, default: false}
*/

/*
Associations :
    ONE User has MANY Projects
    ONE User has MANY notifications

    ONE Project has ONE Owner
    ONE Project has MANY collaborators
    ONE Project has MANY notifications
    
    ONE collaborator works on MANY Projects

    ONE notification belongs to ONE User
    ONE notification belongs to ONE Project
*/