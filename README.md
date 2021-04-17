# Features

* User
    ** User Registration/Login
    ** User Profile [Name, email, mobile, skills, role, profile pic, education, experience, Change Password]
    ** User dashboard [Profile, Projects {Saved {Completed, Ongoing}, My Projects, Applications} , Explore, Notifications, Logout]
        *** Dashboard Home : Epxlore
    ** Approve/Send requests to another users

* Registration :
    ** Personal Details : name, mobile, email, password, confirmPassword
    ** Education Details {list} : institute name, year, course
    ** Experience Details {list} : Company, role, duration, work
    ** Skills {list}
    ** Projects {list} : Name, description, URL, application/skills used, tags (domain), visibility (Public/Private) , status                    [1]
    
    [EMAIL VERIFICATION REQUIRED before login]

* Login :
    ** Email, password ? redirect to dashboard : error
    ** Forgot Password -> { Send reset pwd link to email }

* Projects : 
    ** Add Project
    ** Edit Project [Add/Edit/Delete Collaborators]
    ** Delete Project

* Explore : [Recent Projects ,Show saved projects]
    ** Search (Name,Skills, Tags, Type (Project, Freelancing))
        *** Filter : Ongoing, completed
            **** Ongoing Project : Save, Apply
            **** Completed Project : Comment, Save
    ** Post a Project -> { [1] }
    ** Search for a project -> {Recent Projects, Filters in side for skills}
    ** Search for a collaborator -> {Filter : Skills}
        *** Request For collaboration : Select Project -> Send project,username {Approve/Decline by other user}

## Frontend Pages :
* Forms : Registration, Login, Add Project, Edit Profile/Project/Collaborators
* Landing Pages - Home, About Us, Contact, Team, Navbar [Home, About Us, Contact, Team, Register, Login], Footer
* Dashboard : 
    ** Profile
    ** Projects
    ** Explore [DEFAULT]
    ** Notifications

* Individual Sections : 
    ** Profile [Name, Domain, Educational Background, Experience, Projects {Display 3, VIEW MORE}, Skills {Tags Display}, Button {Invite as Collaborator}]
    ** Project [Owner Name, Name, Desc, URL, Skills, Tags, Images (Optional), Button {Request for Collaboration}]

## Backend Features :
* Register, Edit/Delete User
* Login
* Forgot Password
* Change Password
* Logout
* Add/Edit/Delete Projects
* Add/Edit/Delete Collaborators
* Fetch Profiles/Projects
* Fetch Profiles/Projects by ID
* Send Request for User
* Send Request for Project
* Approve/Decline Requests
* Notifications
[Authentication]

## Database Tables :
* User [user_id]
* Projects [project_id,user_id]
* Collaborators [collab_id,user_id,project-id]
* Notifications [desc,user_id,project_id,status]


### Additional Features
* Click on skills in someone's profile leads to profiles having similar skills
* Click on tags in someone's Project leads to profilesProjects having similar tags