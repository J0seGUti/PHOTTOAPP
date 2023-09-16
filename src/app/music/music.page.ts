import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  audio: any;
  cancionActual: string | null = null;
  isCancionActualPlaying: boolean = false;
  canciones: string[] = [
    '../../assets/Music/AEROSMITH. Angel.mp3',
    '../../assets/Music/NAZIR. La ultima carta.mp3',
    '../../assets/Music/POISON. Every Rose Has Its Thorn.mp3',
    '../../assets/Music/RATA BLANCA. Sólo Para Amarte.mp3',
    '../../assets/Music/RATA BLANCA. Talisman.mp3',
    '../../assets/Music/TIERRA SANTA. El Amor De Mi Vida.mp3'
  ];
  nombresCanciones: string[] = [
    'Angel',
    'La ultima carta',
    'Every Rose Has Its Thorn',
    'Sólo Para Amarte',
    'Talisman',
    'El Amor De Mi Vida'
  ];

  stateCanciones: { [key: string]: boolean } = {};

  constructor(private router: Router) { }

  playMusic(cancion: string) {
    if (this.cancionActual !== cancion) {
      this.pauseMusic();
      this.cancionActual = cancion;
      this.isCancionActualPlaying = false;
    }
    if (!this.isCancionActualPlaying) {
      this.audio = new Audio();
      this.audio.src = cancion;
      this.audio.load();
      this.audio.play();
      this.isCancionActualPlaying = true;
    } else {
      this.pauseMusic();
    }
  }

  pauseMusic() {
    if (this.audio) {
      this.audio.pause();
      this.isCancionActualPlaying = false;
    }
  }

  toggleMusic(cancion: string) {
    if (this.stateCanciones[cancion]) {
      this.pauseMusic();
    } else {
      this.playMusic(cancion);
    }

    this.canciones.forEach(c => {
      if (c !== cancion) {
        this.stateCanciones[c] = false;
      }
    });

    this.stateCanciones[cancion] = !this.stateCanciones[cancion];
  }

  redirigirAHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }
}
