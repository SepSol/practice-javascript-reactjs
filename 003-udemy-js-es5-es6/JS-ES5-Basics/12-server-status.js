var serverStatus = [true, true, false, true];

function serverRunningMessage (i) {
    console.log('Server ' + i + ', running...');
}

function serverDownMessage (i) {
    console.log('Server ' + i + ', down. Restarting...');
    serverRunningMessage(i);
}

for (i = 0; i < serverStatus.length; i++) {
    if (serverStatus[i] /* == true */) { // for false => !serverStatus[i]
        serverRunningMessage(i);
    } else {
        serverDownMessage(i);
    }
}