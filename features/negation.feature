Feature: Negation    
    Scenario: Negation of 7
        Given I start with 7
        When I negate the value
        Then I end up with -7

    Scenario: Negation of -5
        Given I start with -5
        When I negate the value
        Then I end up with 5