module.exports = (sequelize, DataTypes) => {
  const u = sequelize.define(
    'Usuario',
    {
      nome: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false },
      senha: DataTypes.STRING
    },
    {
      tableName: 'usuarios',
      timestamps: false
    }
  );

  u.associate = (models) => {
    // associando usuarios com contatos
    u.hasMany(models.Contato, { as: 'contatos', foreignKey: 'usuarios_id' });

    // Associando um usuario com outros usuarios(amizade) (muitos para muitos)
    u.belongsToMany(
      models.Usuario,
      {
        as: 'colegas', // nome do relacionamento
        through: 'amizades', // nome da tabela intermediaria
        foreignKey: 'usuarios1_id',
        otherKey: 'usuarios2_id',
        timestamps: false
      }

    )

  }

  return u;
}
