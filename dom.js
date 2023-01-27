function registerUser(event){
    event.preventDefault();

    const name = event.target.name.value;
    const emailId = event.target.email.value;
    const phoneNo = event.target.phone.value;
    const date = event.target.date.value;
    const time = event.target.time.value
    
    const obj = {
        name,
        emailId,
        phoneNo,
        date,
        time
    }
    
    localStorage.setItem(emailId, JSON.stringify(obj));
    showUserOnScreen(obj);

    function showUserOnScreen(obj){
        const parentItem = document.getElementById('list of items');
        const childItem = document.createElement('li');
        
        childItem.textContent = obj.name + "- " + obj.emailId + "- " + obj.phoneNo + "- " + obj.date + "- " + obj.time;
        parentItem.appendChild(childItem);

        const deleteButton = document.createElement('input');
        deleteButton.type = "button";
        deleteButton.value = 'Delete';
        deleteButton.onclick = () => {
             localStorage.removeItem(obj.emailId);
             parentItem.removeChild(childItem);
        }

        const editButton = document.createElement('input');
        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.onclick = () => {
            localStorage.removeItem(obj.emailId);
            parentItem.removeChild(childItem);
            document.getElementById('name').value = obj.name;
            document.getElementById('email').value = obj.emailId;
            //document.getElementById('tel').value = obj.phoneNo;
            document.getElementById('date').value = obj.date;
            document.getElementById('time').value = obj.time;
        }

        parentItem.appendChild(childItem);
        parentItem.appendChild(deleteButton);
        parentItem.appendChild(editButton);
        
    }
    
    
}