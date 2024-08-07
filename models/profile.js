module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      name: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM('Builder', 'Talent'),
        allowNull: false
      },
      skills: DataTypes.ARRAY(DataTypes.STRING),
      experience: DataTypes.INTEGER
      // Add other fields as per Figma design
    });
  
    return Profile;
  };
  