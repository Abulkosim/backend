const authService = require('../../services/authService');
const path = require('path');

exports.getUsers = async (req, res) => {
  try {
    const users = await authService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.user.id;
    const { name, username, password, bio } = req.body;

    const user = await authService.update(id, { name, username, password, bio });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await authService.delete(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await authService.getUser(req.params.username);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editName = async (req, res) => {
  try {
    const id = req.user.id;
    const name = req.body.name;

    const user = await authService.editName(id, name);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.uploadPic = async (req, res) => {
  try {
    const id = req.user.id;
    console.log(req.file)
    const profilePic = req.file.filename;

    const user = await authService.uploadPic(id, profilePic);
    res.status(200).json({ message: 'Profile picture uploaded successfully'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.getPic = async (req, res) => {
  try {
    const user = await authService.getPic(req.params.username);
    const img = path.join(__dirname, '../../../images', user.profile_pic);
    res.status(200).sendFile(img);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}