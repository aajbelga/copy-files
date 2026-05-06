const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let leaves = [];
let sosAlerts = [];

app.post('/api/leave/apply', (req, res) => {
    const { studentId, type, reason, returnTime, region } = req.body;
    const newLeave = { id: leaves.length + 1, studentId, type, reason, status: 'Pending', returnTime, region, qrCode: null };
    leaves.push(newLeave);
    res.status(201).json(newLeave);
});

app.get('/api/leaves/:studentId', (req, res) => {
    const studentId = parseInt(req.params.studentId);
    res.json(leaves.filter(l => l.studentId === studentId));
});

app.get('/api/leaves', (req, res) => res.json(leaves));

app.post('/api/leave/action', (req, res) => {
    const { leaveId, action } = req.body;
    const leave = leaves.find(l => l.id === leaveId);
    if (!leave) return res.status(404).json({ message: 'Leave not found' });
    if (action === 'Approve') {
        leave.status = 'Approved';
        leave.qrCode = { code: `AUTH-${leave.studentId}-${Date.now()}` };
    } else {
        leave.status = 'Rejected';
    }
    res.json(leave);
});

app.post('/api/sos', (req, res) => {
    const { studentId, location, type = 'Manual' } = req.body;
    const alert = { id: sosAlerts.length + 1, studentId, location, type, time: new Date().toISOString() };
    sosAlerts.push(alert);
    res.status(201).json(alert);
});

app.get('/api/sos', (req, res) => res.json(sosAlerts));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
