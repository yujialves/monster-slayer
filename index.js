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
    attack: function () {
      const damageDone = this.calculateDamage(3, 10);
      this.monsterHp -= damageDone;
      this.logs.unshift({
        isPlayer: true,
        message: `PLAYER HITS MONSTER FOR ${damageDone}`,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
      this.checkWin();
    },
    specialAttack: function () {
      const damageDone = this.calculateDamage(10, 20);
      this.monsterHp -= damageDone;
      this.logs.unshift({
        isPlayer: true,
        message: `PLAYER HITS MONSTER HARD FOR ${damageDone}`,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
      this.checkWin();
    },
    heal: function () {
      if (this.userHp <= 90) {
        this.userHp += 10;
      } else {
        this.userHp = 100;
      }
      this.logs.unshift({
        isPlayer: true,
        message: `PLAYER HEALS FOR 10`,
      });
      this.monsterAttacks();
    },
    giveUp: function () {
      this.started = false;
    },
    monsterAttacks: function () {
      const damageTaken = this.calculateDamage(5, 12);
      this.userHp -= damageTaken;
      this.checkWin();
      this.logs.unshift({
        isPlayer: false,
        message: `MONSTER HITS PLAYER FOR ${damageTaken}`,
      });
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHp <= 0) {
        if (confirm("You won! New Game?")) {
          this.start();
        } else {
          this.started = false;
        }
        return true;
      } else if (this.userHp <= 0) {
        if (confirm("You lost! New Game?")) {
          this.start();
        } else {
          this.started = false;
        }
        return true;
      }
      return false;
    },
  },
});
