import { Injectable } from '@angular/core';
import { Bonus } from '../models/bonus';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  localStorage = localStorage;

  player: Player = {
    nickname: '',
    points: 0,
    level: 0,
    experience: 0,
    clickBonus: 0,
    boughtBonusIds: [],
  };

  bonuses: Bonus[] = [
    {
      id: 1,
      title: 'Extra mouse',
      icon: 'mouse',
      price: 1000,
      bonus: 2,
      isBougth: false,
    },
    {
      id: 2,
      title: 'Extra finger',
      icon: 'touch_app',
      price: 2000,
      bonus: 3,
      isBougth: false,
    },
    {
      id: 3,
      title: 'Double-click',
      icon: 'keyboard_double_arrow_up',
      price: 3000,
      bonus: 4,
      isBougth: false,
    },
    {
      id: 4,
      title: 'Extra hand',
      icon: 'pan_tool',
      price: 5000,
      bonus: 5,
      isBougth: false,
    },
    {
      id: 5,
      title: 'Mutation',
      icon: 'coronavirus',
      price: 10000,
      bonus: 6,
      isBougth: false,
    },
    {
      id: 6,
      title: 'Rabbit fingers',
      icon: 'cruelty_free',
      price: 20000,
      bonus: 7,
      isBougth: false,
    },
    {
      id: 7,
      title: 'Extra person',
      icon: 'emoji_people',
      price: 50000,
      bonus: 8,
      isBougth: false,
    },
    {
      id: 8,
      title: 'Machine',
      icon: 'precision_manufacturing',
      price: 100000,
      bonus: 10,
      isBougth: false,
    },
  ];

  save() {
    this.localStorage.setItem('player', JSON.stringify(this.player));
  }

  read() {
    if (this.localStorage.getItem('player') != undefined) {
      this.player = JSON.parse(this.localStorage.getItem('player')!);
    }
  }

  reset() {
    this.localStorage.removeItem('player');

    this.player = {
      nickname: '',
      points: 0,
      level: 0,
      experience: 0,
      clickBonus: 0,
      boughtBonusIds: [],
    };
  }

  addPoints(combo: number) {
    const totalBonus = this.bonuses
      .filter((x) => this.player.boughtBonusIds.includes(x.id))
      .map((x) => x.bonus)
      .reduce((total, id) => total + id, 0);

    const pointsWithBonus = 1 * totalBonus ? totalBonus : 1 * combo ? combo : 1;

    const pointsToAdd = pointsWithBonus * combo ? combo : 1;

    this.player.points += pointsToAdd;

    this.save();
  }

  addBonus(bonusId: number) {
    this.player.boughtBonusIds.push(bonusId);

    this.player.points -= this.bonuses.find((x) => x.id == bonusId)!.price;

    this.save();
  }
}
