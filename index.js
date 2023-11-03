const checkboxes = document.querySelectorAll('input[name="color"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {     
        checkboxes.forEach(cb => {
            if (cb !== this) {
                cb.checked = false;
            }
        });
    });
});
