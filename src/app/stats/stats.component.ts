import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service'

@Component({
  selector: 'game-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  providers: [PlayerService]
})
export class StatsComponent implements OnInit {
  @Input() currentPlayer;

  constructor(public playerService: PlayerService) { }

  ngOnInit() {

  }
  notNull() {
    alert(this.currentPlayer.name);
  }
}