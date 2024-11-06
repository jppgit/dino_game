// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {
	private menuOptions: Phaser.GameObjects.Text[] = [];
	private selectedIndex: number = 0;

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		this.add.image(512, 383, "background");

		// dino_main_menu
		this.add.image(494, 353, "dino_main_menu");

		// Dinosaurs Secret
		const dinosaurs_Secret = this.add.text(267, 40, "", {});
		dinosaurs_Secret.text = "Dinosaurs Secret";
		dinosaurs_Secret.setStyle({ "fontFamily": "Pixelify Sans", "fontSize": "60px", "fontStyle": "bold" });

		this.events.emit("scene-awake");


	
			const options = ['Start Game', 'Settings', 'Exit'];
		
			// Agrega las opciones del menú como texto en la pantalla
			options.forEach((option, index) => {
			  const menuOption = this.add.text(100, 150 + index * 50, option, {
				fontSize: '32px',
				fontFamily: 'Pixelify Sans', // Cambia a la fuente que necesites
				color: '#ffffff',
			  }).setInteractive(); // Hace el texto interactivo para clics
			  
			  menuOption.on('pointerdown', () => this.selectOption(index)); // Maneja clics en el texto
			  this.menuOptions.push(menuOption);
			});
		
			// Destaca la opción seleccionada inicialmente
			this.updateMenu();
		
			// Configura controles de teclado
			this?.input?.keyboard?.on('keydown-UP', this.navigateUp, this);
			this?.input?.keyboard?.on('keydown-DOWN', this.navigateDown, this);
			this?.input?.keyboard?.on('keydown-ENTER', this.activateOption, this);
		 
		
		 
	}

	/* START-USER-CODE */

	// Write your code here

    create ()
    {

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });

        this.editorCreate();
    }
    /* END-USER-CODE */


	 // Método para destacar la opción seleccionada
	 private updateMenu() {
		this.menuOptions.forEach((option, index) => {
		  option.setStyle({
			color: index === this.selectedIndex ? '#ffff00' : '#ffffff',
		  });
		});
	  }
	
	  // Navegar hacia arriba en el menú
	  private navigateUp() {
		this.selectedIndex = (this.selectedIndex - 1 + this.menuOptions.length) % this.menuOptions.length;
		this.updateMenu();
	  }
	
	  // Navegar hacia abajo en el menú
	  private navigateDown() {
		this.selectedIndex = (this.selectedIndex + 1) % this.menuOptions.length;
		this.updateMenu();
	  }
	
	  // Activa la opción seleccionada con Enter o clic
	  private activateOption() {
		this.selectOption(this.selectedIndex);
	  }
	
	  // Maneja la opción seleccionada
	  private selectOption(index: number) {
		const selectedOption = this.menuOptions[index].text;
		switch (selectedOption) {
		  case 'Start Game':
			this.startGame();
			break;
		  case 'Settings':
			this.openSettings();
			break;
		  case 'Exit':
			this.exitGame();
			break;
		}
	  }
	
	  // Métodos para cada opción del menú
	  private startGame() {
		console.log('Starting game...');
		// Aquí puedes cambiar a la escena del juego
	  }
	
	  private openSettings() {
		console.log('Opening settings...');
		// Aquí puedes cambiar a la escena de configuraciones
	  }
	
	  private exitGame() {
		console.log('Exiting game...');
		// Aquí puedes salir del juego o cerrar la aplicación
	  }
}

/* END OF COMPILED CODE */

// You can write more code here