const { sql } = require("../config/database");

/**
 * Create New User
 */
const createUser = async (user) => {
  const request = new sql.Request();

  request.input("Name", sql.NVarChar, user.name);
  request.input("Email", sql.NVarChar, user.email);
  request.input("Mobile", sql.NVarChar, user.mobile);
  request.input("PasswordHash", sql.NVarChar, user.passwordHash);

  const result = await request.query(`
        INSERT INTO Users
        (
            Name,
            Email,
            Mobile,
            PasswordHash
        )
        VALUES
        (
            @Name,
            @Email,
            @Mobile,
            @PasswordHash
        );

        SELECT SCOPE_IDENTITY() AS Id;
    `);

  return result.recordset[0];
};

/**
 * Get User By Email
 */
const getUserByEmail = async (email) => {
  const request = new sql.Request();

  request.input("Email", sql.NVarChar, email);

  const result = await request.query(`
        SELECT *
        FROM Users
        WHERE Email=@Email
    `);

  return result.recordset[0];
};

/**
 * Get User By Id
 */
const getUserById = async (id) => {
  const request = new sql.Request();

  request.input("Id", sql.Int, id);

  const result = await request.query(`
        SELECT *
        FROM Users
        WHERE Id=@Id
    `);

  return result.recordset[0];
};

/**
 * Update Profile
 */
const updateProfile = async (id, user) => {
  const request = new sql.Request();

  request.input("Id", sql.Int, id);
  request.input("Name", sql.NVarChar, user.name);
  request.input("Mobile", sql.NVarChar, user.mobile);

  await request.query(`
        UPDATE Users
        SET
            Name=@Name,
            Mobile=@Mobile,
            UpdatedAt=GETDATE()
        WHERE Id=@Id
    `);

  return true;
};

/**
 * Update Profile Image
 */
const updateProfileImage = async (id, image) => {
  const request = new sql.Request();

  request.input("Id", sql.Int, id);
  request.input("ProfileImage", sql.NVarChar, image);

  await request.query(`
        UPDATE Users
        SET
            ProfileImage=@ProfileImage,
            UpdatedAt=GETDATE()
        WHERE Id=@Id
    `);

  return true;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateProfile,
  updateProfileImage,
};