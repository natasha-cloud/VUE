const app = Vue.createApp({
  data() {
    return {
      tvStatus: "The Television is currently off",
      isTvOn: false,
      powerBtn: "./power-off.svg",
      programCounter: 1,
      programs: [
        {
          id: "1",
          title: "Jumangi",
          url: "./Jumanji.mp4",
        },
        {
          id: "2",
          title: "Sturdy Stanta",
          url: "./Ha_wait_a_minute.mp4",
        },
        {
          id: "3",
          title: "Ola Ola Ola",
          url: "./Ola.mp4",
        },
      ],
    };
  },

  methods: {
    togglePower() {
      this.isTvOn = !this.isTvOn;
      this.tvStatus = this.isTvOn ? "Tv is on" : "Tv is off";
      if (this.isTvOn) {
        this.powerBtn = "./power-on.svg";
      } else {
        this.powerBtn = "./power-off.svg";
      }
    },

    forward() {
      this.programCounter++;
      if (this.programCounter > this.programs.length) {
        this.programCounter = 1;
      }
    },

    backward() {
      this.programCounter--;
      if (this.programCounter < this.programs[0].id) {
        this.programCounter = this.programs.length;
      }
    },
  },
});

app.mount("#cse");
