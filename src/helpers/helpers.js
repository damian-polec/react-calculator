export const isOperator ='/[*/+-]/ ',
      endsWithOperator = new RegExp('[*/+-]$', 'i'),
      numbers = [
        {
          id: 'decimal',
          text: '.',
          dataType: '.'
        },
        {
          id: 'zero',
          text: '0',
          dataType: 0
        },
        {
          id: 'one',
          text: '1',
          dataType: 1
        },
        {
          id: 'two',
          text: '2',
          dataType: 2
        },
        {
          id: 'three',
          text: '3',
          dataType: 3
        },
        {
          id: 'four',
          text: '4',
          dataType: 4
        },
        {
          id: 'five',
          text: '5',
          dataType: 5
        },
        {
          id: 'six',
          text: '6',
          dataType: 6
        },
        {
          id: 'seven',
          text: '7',
          dataType: 7
        },
        {
          id: 'eight',
          text: '8',
          dataType: 8
        },
        {
          id: 'nine',
          text: '9',
          dataType: 9
        }
      ],
      oprerators = [
        {
          id: 'divide',
          text: '/',
          dataType: '/'
        },
        {
          id: 'multiply',
          text: 'X',
          dataType: '*'
        },
        {
          id: 'subtract',
          text: '-',
          dataType: '-'
        },
        {
          id: 'add',
          text: '+',
          dataType: '+'
        }
      ];