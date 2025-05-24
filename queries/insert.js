const queries = {
  standings: `
    INSERT INTO standings (position, team_name, points, games_played, games_win, games_draw, games_lost, logo) VALUES
    (1, 'Manchester City', 91, 38, 28, 7, 3, 'https://media.api-sports.io/football/teams/50.png'),
    (2, 'Arsenal', 89, 38, 28, 5, 5, 'https://media.api-sports.io/football/teams/42.png'),
    (3, 'Liverpool', 82, 38, 24, 10, 4, 'https://media.api-sports.io/football/teams/40.png'),
    (4, 'Aston Villa', 68, 38, 20, 8, 10, 'https://media.api-sports.io/football/teams/66.png'),
    (5, 'Tottenham', 66, 38, 20, 6, 12, 'https://media.api-sports.io/football/teams/47.png'),
    (6, 'Chelsea', 63, 38, 18, 9, 11, 'https://media.api-sports.io/football/teams/49.png'),
    (7, 'Newcastle', 60, 38, 18, 6, 14, 'https://media.api-sports.io/football/teams/34.png'),
    (8, 'Manchester United', 60, 38, 18, 6, 14, 'https://media.api-sports.io/football/teams/33.png'),
    (9, 'West Ham', 52, 38, 14, 10, 14, 'https://media.api-sports.io/football/teams/48.png'),
    (10, 'Crystal Palace', 49, 38, 13, 10, 15, 'https://media.api-sports.io/football/teams/52.png'),
    (11, 'Brighton', 48, 38, 12, 12, 14, 'https://media.api-sports.io/football/teams/51.png'),
    (12, 'Bournemouth', 48, 38, 13, 9, 16, 'https://media.api-sports.io/football/teams/35.png'),
    (13, 'Fulham', 47, 38, 13, 8, 17, 'https://media.api-sports.io/football/teams/36.png'),
    (14, 'Wolves', 46, 38, 13, 7, 18, 'https://media.api-sports.io/football/teams/39.png'),
    (15, 'Everton', 40, 38, 13, 9, 16, 'https://media.api-sports.io/football/teams/45.png'),
    (16, 'Brentford', 39, 38, 10, 9, 19, 'https://media.api-sports.io/football/teams/55.png'),
    (17, 'Nottingham Forest', 32, 38, 9, 9, 20, 'https://media.api-sports.io/football/teams/65.png'),
    (18, 'Luton', 26, 38, 6, 8, 24, 'https://media.api-sports.io/football/teams/1359.png'),
    (19, 'Burnley', 24, 38, 5, 9, 24, 'https://media.api-sports.io/football/teams/44.png'),
    (20, 'Sheffield Utd', 16, 38, 3, 7, 28, 'https://media.api-sports.io/football/teams/62.png')
  `,

  matches: `
  -- 1. Burnley vs Manchester City
        INSERT INTO matches (fixture_id, home_team, home_team_id, away_team, away_team_id, home_score, away_score, date)
        VALUES (1035037, 'Burnley', 44, 'Manchester City', 50, 0, 3, '2023-08-11T19:00:00+00:00');

  -- 2. Arsenal vs Nottingham Forest
        INSERT INTO matches (fixture_id, home_team, home_team_id, away_team, away_team_id, home_score, away_score, date)
        VALUES (1035038, 'Arsenal', 42, 'Nottingham Forest', 65, 2, 1, '2023-08-12T11:30:00+00:00');

  -- 3. Bournemouth vs West Ham
        INSERT INTO matches (fixture_id, home_team, home_team_id, away_team, away_team_id, home_score, away_score, date)
        VALUES (1035039, 'Bournemouth', 35, 'West Ham', 48, 1, 1, '2023-08-12T14:00:00+00:00');

  -- 4. Everton vs Fulham
        INSERT INTO matches (fixture_id, home_team, home_team_id, away_team, away_team_id, home_score, away_score, date)
        VALUES (1035041, 'Everton', 45, 'Fulham', 36, 0, 1, '2023-08-12T14:00:00+00:00');

  -- 5. Brighton vs Luton
        INSERT INTO matches (fixture_id, home_team, home_team_id, away_team, away_team_id, home_score, away_score, date)
        VALUES (1035040, 'Brighton', 51, 'Luton', 1359, 4, 1, '2023-08-12T14:00:00+00:00');

  -- 6. Sheffield Utd vs Crystal Palace
        INSERT INTO matches (fixture_id, home_team, home_team_id, away_team, away_team_id, home_score, away_score, date)
        VALUES (1035042, 'Sheffield Utd', 62, 'Crystal Palace', 52, 0, 1, '2023-08-12T14:00:00+00:00');
  `
};
module.exports = queries;