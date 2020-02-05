import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";


test('Should filter by value',()=>{
    const filters = {
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[0]]);
});

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('Should sort by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(3,'days'),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1]]);
});

test('Should sort by endDate',()=>{
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test('Should sort by endDate and startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(2,'days'),
        endDate: moment(0).add(2,'days')
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]]);
});

test('Should sort by amount', ()=>{
    const filters = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);
});