const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

new Vue({
  el: "#app",
  data: {
    started: false,
    userHp: 100,
    monsterHp: 100,
    logs: [],
  },
  methods: {
    start: function () {
      this.userHp = 100;
      this.monsterHp = 100;
      this.logs = [];
      this.started = true;
    },
    renderUserHP: function () {
      return {
        width: this.userHp + "%",
      };
    },
    renderMonsterHP: function () {
      return {
        width: this.monsterHp + "%",
      };
    },
    attack: function () {
      const damageDone = rand(5, 10);
      const damageTaken = rand(5, 12);
      this.monsterHp -= damageDone;
      this.userHp -= damageTaken;
      this.logs.push({
        style: {
          color: "blue",
          backgroundColor: "lavender",
        },
        message: `PLAYER HITS MONSTER FOR ${damageDone}`,
      });
      this.logs.push({
        style: {
          color: "red",
          backgroundColor: "pink",
        },
        message: `MONSTER HITS PLAYER FOR ${damageTaken}`,
      });
    },
    specialAttack: function () {
      const damageDone = rand(15, 20);
      const damageTaken = rand(5, 12);
      this.monsterHp -= damageDone;
      this.userHp -= damageTaken;
      this.logs.push({
        style: {
          color: "blue",
          backgroundColor: "lavender",
        },
        message: `PLAYER HITS MONSTER FOR ${damageDone}`,
      });
      this.logs.push({
        style: {
          color: "red",
          backgroundColor: "pink",
        },
        message: `MONSTER HITS PLAYER FOR ${damageTaken}`,
      });
    },
    heal: function () {
      const damageTaken = rand(5, 12);
      this.userHp += 10;
      this.userHp -= damageTaken;
      this.logs.push({
        style: {
          color: "blue",
          backgroundColor: "lavender",
        },
        message: `PLAYER HEALS HIMSELF FOR 10`,
      });
      this.logs.push({
        style: {
          color: "red",
          backgroundColor: "pink",
        },
        message: `MONSTER HITS PLAYER FOR ${damageTaken}`,
      });
    },
    giveUp: function () {
      this.started = false;
    },
  },
});
