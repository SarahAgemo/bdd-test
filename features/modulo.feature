Feature: Modulo    
    Scenario: 10 % 3
        Given I start with 10
        When I take modulo by 3
        Then I end up with 1

    Scenario: 14 % 5
        Given I start with 14
        When I take modulo by 5
        Then I end up with 4

      