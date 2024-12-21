const captainModel = require('../models/captain.model');
const CaptainService  = require('../services/captain.service ');
const blacklistTokenModel = require('../models/blacklistToken.model');
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        // Validate request data from the middleware
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;
        // console.log(req.body);
        

        // Validate required fields
        if (!fullname || !fullname.firstname || !fullname.lastname) {
            return res.status(400).json({ message: 'Full name (first and last) is required' });
        }

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        if (!vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicleType) {
            return res.status(400).json({ message: 'Vehicle details (color, plate, capacity, type) are required' });
        }

        // Check if the captain already exists
        const isCaptainAlreadyExist = await captainModel.findOne({ email });
        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: 'Captain already exists' });
        }

        // Hash the password
        const hashedPassword = await captainModel.hashPassword(password);

        // Create the captain
        const captain = await CaptainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });

        // Generate a token
        const token = captain.generateAuthToken();

        // Respond with the created captain and token
        res.status(201).json({ token, captain });
    } catch (error) {
        console.error('Error registering captain:', error);
        next(error);
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}