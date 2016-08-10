import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setEntries, next, vote} from '../src/core';

describe('application logic', () => {

	// ..
	describe('vote', () => {
		it('creates a tally for the voted entry', () => {
			const state = Map({
				pair: List.of('Trainspotting', '28 Days Later')
			});
			const nextState = vote(state, 'Trainspotting');
			expect(nextState).to.equal(Map({
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 1
				})
			}));
		});

		it('adds to existing tally for the voted entry', () => {
			const state = Map({
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 3,
					'28 Days Later': 2
				})
			});

			const nextState = vote(state, 'Trainspotting');
			expect(nextState).to.equal(Map({
				pair: List.of('Trainspotting', '28 Days Later'),
				tally: Map({
					'Trainspotting': 4,
					'28 Days Later': 2
				}
			)}));
		});
	});
});
