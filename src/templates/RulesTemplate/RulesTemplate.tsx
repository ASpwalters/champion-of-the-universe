import React from 'react'
import { Container } from '@/atoms/Container'
import { UnorderedList } from '@/atoms/UnorderedList'

export const RulesTemplate: React.FC = () => {
  return (
    <div className="text-base">
      <header>
        <Container>
          <h1 className="text-xl text-center">Rules of the Universe!</h1>
        </Container>
      </header>
      <Container>
        <section>
          <h2 className="text-lg">How to win</h2>
          <UnorderedList>
            <li>Be the last man standing!</li>
          </UnorderedList>
        </section>
        <section>
          <h2 className="text-lg">Setup</h2>
          <UnorderedList>
            <li>
              Give the <b>Lucky Coin</b> to the player closest to the game owner.
            </li>
            <li>
              Give the <b>Bidding Coins</b> 1-11 to each player.
            </li>
            <li>Shuffle the character cards and reveal x+1 cards where x is the number of players in the game.</li>
            <li>
              Bid on characters!
              <div className="p-4 bg-gray-50">
                Bidding
                <UnorderedList>
                  <li>All players place an auction coin facedown and reveal simultaneously.</li>
                  <li>
                    Highest bid chooses a character first. In the event of a tie, if the player with the{' '}
                    <b>Lucky Coin</b> is involved in the tie that player flips the coin and if &quot;LUCKY!&quot; is the
                    result that player wins, but if &quot;UNLUCKY!&quot; is the result that player loses.
                  </li>
                  <li>
                    If the player with the <b>Lucky Coin</b> isn&apos;t involved in the tie, the <b>Lucky Coin</b>{' '}
                    passes in turn order until someone involved in the tie possesses it.
                  </li>
                  <li>
                    If the tie involves more than 2 people, after the result of the first flip the <b>Lucky Coin</b>{' '}
                    passes as needed and is flipped again and will continue to be passed as there are still ties.
                  </li>
                </UnorderedList>
                <div className="italic p-8">
                  Example: 6 players all use their #11 bid resulting in a 6 way tie. The player with the{' '}
                  <b>Lucky Coin</b> flips and the result is &quot;UNLUCKY!&quot;. This player, Joseph, is now last to
                  pick of the 6 players. Next turn is Deanna&apos;s turn and her result is &quot;LUCKY!&quot; so she
                  will be the first to pick a card. Next up is Pat and his result is &quot;UNLUCKY!&quot;, so he will be
                  second to last to pick a card. After Pat it&apos;s Dwight&apos;s turn and his result is
                  &quot;LUCKY!&quot; so he will be second to pick a card. Next is Jeremy&apos;s turn and his result is
                  &quot;UNLUCKY!&quot; making him third to last to pick a card which means that Rich will pick a card
                  third.
                </div>
              </div>
            </li>
            <li>
              After all players have picked a character card the coins used for bidding and the remaining character card
              are then discarded leaving each player with one character card and 10 auction coins.
            </li>
            <li>
              Shuffle the 10 legendary cards and 1 of each basic card per player to form the <b>Pool Supply Deck</b>. A
              3 player game should have 40 cards in the <b>Pool Supply Deck</b>, 3 of each basic card and the 10
              Legendary cards.
            </li>
            <li>
              Each round of bidding will reveal x+1 cards from the <b>Pool Supply Deck</b> and players will bid as
              described previously.
            </li>
            <li>
              After the ten rounds of bidding, each player will have a character card and 10 player cards, and the 10
              discarded <b>Pool Cards</b> are returned to the box.
            </li>
            <li>
              Each player places their character card in front of them in their play area and gets health tokens as many
              as needed and places them on their character card.
            </li>
            <li>
              The ten player cards form their hand and you are ready to fight and find the Champion of the Universe!
            </li>
          </UnorderedList>
        </section>
        <section>
          <h2 className="text-lg">Gameplay</h2>
          <UnorderedList>
            <li>
              First player is the player who used the <b>Lucky Coin</b> last (or who started with it if no one used it).
            </li>
            <li>
              On a players turn they choose one card from their hand to use as an attack on one opponent.
              <ul className="px-4 list-disc">
                <li>
                  The attack cannot target the same target as the previous turns attack or someone who has already been
                  damaged by two different players this round.
                </li>
                <li>You must make an attack if able.</li>
                <li>
                  The attack card is placed face-down and the target of the attack can choose to play a card from their
                  hand as a defense.
                </li>
                <li>
                  The attack card is then revealed and the difference between the attack strength and the defense
                  strength is inflicted as damage.
                </li>
                <li>
                  After the attack, the attack card and defense card (if applicable) are placed in their respective
                  discard piles.
                </li>
                <li>On every players turn, including your own, you may use 1 of your cards for its magic ability.</li>
                <li>
                  At the end of every players turn, wounds set in-- if you are at 0 health or if all of your cards are{' '}
                  <b>Exhausted</b>, your character dies and you are NOT the Champion of the Universe!
                </li>
                <li>
                  At the end of any players turn that all players have 0 cards in hand, all players take their discard
                  piles into their hands.
                </li>
                <li>
                  Health cannot be higher than your characters starting health and cannot be reduced lower than 0.
                </li>
                <li>
                  In the event that all players are <b>Exhausted</b> or die at the end of a turn, the player who last
                  played a card is declared Winner by Cunning!
                </li>
              </ul>
            </li>
          </UnorderedList>
        </section>
      </Container>
    </div>
  )
}
