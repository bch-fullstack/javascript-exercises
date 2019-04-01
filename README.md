# javascript-exercises

### Forking this repository
Fork this repository by clicking on the fork logo on the top right corner of this page that says "Fork". 

You will then see animation that indicates the repository is being forked to your personal repository, wait for it to complete and you should be redirected to the forked version of this repository. 

### How to use the forked repo
Clone your forked repository and open it on Github Desktop. Open in VSCode.

### Setup your exercise folder
1. Switch to the exercise branch you would like to work on
2. Navigate to the students folder, make a copy of the **_copy-and-rename_** folder and rename it to your name in the following format
    **_firstname-lastname_** (Don't use uppercase letter nor spacing)
3. Complete your exercises, commit your changes
4. 
5. and create a pull request. Once your pull request is approved and merged, you can move on and switch to the exercise branch to complete your exercise

### Keeping your forked repo synced using Github Desktop
To sync the master of your fork to the master of the original repository using GitHub Desktop:

Click on the **current branch** tab and first select **master** as the current branch (if it's not already selected).

Click on the **fetch origin** button.

Click on the **current branch** tab again and click the **choose a branch to merge into master** button at the bottom.

*NOTE: Looking down this list, you will find 2 entries for every branch. Those that are prefixed with origin/ are the branches in your fork, and those prefixed with upstream/ are those in the original repository on GitHub.

Select upstream/master from this list, and this pull the changes down from the master repository to bring your local clone up to date. Once you local clone has finished pulling the updates from the master repo, push these new changes to your fork, stored on GitHub, using the push origin button on GitHub desktop.

### Keeping your forked repo synced using Git Bash
```
cd into/cloned/fork-repo
git remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git
git fetch upstream
```