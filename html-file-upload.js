document.addEventListener('alpine:init', () => {
    console.log("Initing alpine.js");

    Alpine.store('uiState', {
        files: [],
        selectAll: false,
        claimRelation: '',
        owner: '',
        documentType: '',
        dateReceived: new Date().toLocaleDateString('en-US'),
        handleAddClick() {
            console.log("Handling add file click");
            document.querySelector('#hidden-file-selector').click();

        },
        handleRemoveClick() {
            console.log("Handling remove file click");
            this.files = this.files.filter(file => !file.selected);

            // ux - uncheck selectAll if all files were removed
            if (this.files.length === 0) {
                this.selectAll = false;
            }
        },
        handleRemoveState() {
            // enable if any files are selected (this.files.selected === true)
            console.log('handling remove button state');
            return this.files.filter(file => file.selected).length > 0;
        },
        handleExitClick() {
            console.log("Handling exit click");
        },

        handleUploadClick() {
            console.log("Handling upload click");
            console.log('state of upload files', this);
        },
        handleUploadState() {
            console.log('leaving upload open for now as a means to test state when clicked it will show the state of ui');
            return true;
        },
        handleApplyClick() {
            console.log("Handle apply click");
            this.selectedFiles.forEach(file => {
                file.claimRelation = this.claimRelation;
                file.owner = this.owner;
                file.documentType = this.documentType;
            })

            // ux - deselect all and uncheck everything
            this.selectAll = false;
            this.files.forEach(file => {
                file.selected = false;
            })
        },
        handleApplyState() {
            console.log('handling apply button state');
            // check that files are selected
            if (this.selectedFiles.length === 0) {
                return false;
            }

            // check that required metadata files have been selected
            if (this.claimRelation && this.owner && this.documentType) {
                return true;
            }

            // default to false if we fall through all other conditions
            return false;
        },
        handleFileAdd(htmlFileInputElement) {
            console.log('Adding files: ', htmlFileInputElement.files);
            // sweet spread operator action!!!! Converting FileList object into arry and then mapping to uploadFile objects
            // See: https://stackoverflow.com/questions/40902437/cant-use-foreach-with-filelist
            [...htmlFileInputElement.files].map(file => {
                let uploadItem = {
                    selected: false,
                    name: file.name,
                    type: file.type,
                    content: 'todo',
                    claimRelation: '',
                    owner: '',
                    documentType: '',
                    comment: ''
                }
                this.files.push(uploadItem);
            })
        },
        toggleSelectAll() {
            this.files.forEach(file => file.selected = this.selectAll);
        },
        get selectedFiles() {
            return selectedFiles = this.files.filter(file => file.selected);
        }
    });
});
