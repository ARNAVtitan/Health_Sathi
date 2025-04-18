document.addEventListener('DOMContentLoaded', function() {
    // ... [keep all your existing medicalRecords array and DOM element declarations]

    // Modal handlers - FIXED VERSION
    const uploadModalBtn = document.getElementById('upload-modal-btn');
    const uploadModal = document.getElementById('upload-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const closeModal = document.querySelector('.close-modal');

    // Show upload section when "Upload Record" button is clicked
    uploadModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to the upload section instead of opening modal
        document.querySelector('.upload-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Show success modal after form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const type = document.getElementById('record-type').value;
        const date = document.getElementById('record-date').value;
        const description = document.getElementById('record-description').value;
        const file = recordFile.files[0];
        
        // Validate required fields
        if (!type || !date || !file) {
            alert('Please fill all required fields');
            return;
        }

        // Create new record
        const newRecord = {
            id: medicalRecords.length + 1,
            title: file.name,
            type: type,
            date: date,
            doctor: "Dr. Smith",
            description: description,
            file: file.name
        };
        
        medicalRecords.unshift(newRecord);
        renderRecords(medicalRecords);
        
        // Show success modal
        uploadModal.style.display = 'flex';
        uploadForm.reset();
        fileName.textContent = '';
    });

    // Close modal handlers
    modalCloseBtn.addEventListener('click', function() {
        uploadModal.style.display = 'none';
    });

    closeModal.addEventListener('click', function() {
        uploadModal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === uploadModal) {
            uploadModal.style.display = 'none';
        }
    });

    // ... [keep all your existing renderRecords, filterRecords, and other functions]
});