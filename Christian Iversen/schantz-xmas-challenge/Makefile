SHELL=zsh

clean:
	rm -fv **/*~(N) *.out(N)

run:
	@python xmas1 > 1.out
	@python xmas2 > 2.out
	@zsh xmas3 > 3.out
	@python xmas4 > 4.out
	@./whitespace.pl xmas5 > 5.out
	@zsh xmas6 > 6.out
	@zsh xmas7 > 7.out 2> /dev/null || true
	@perl xmas8 > 8.out
	@java -jar cjam-0.6.5.jar xmas9 > 9.out
	@python xmas10-generator > xmas10 && python gs2/gs2.py xmas10 > 10.out

sizes:
	@./size.py xmas1
	@./size.py xmas2
	@./size.py xmas3
	@./size.py xmas4
	@./size.py xmas5
	@./size.py xmas6
	@./size.py xmas7
	@./size.py xmas8
	@./size.py xmas9
	@./size.py xmas10

compare: run
	@diff -Bqw 1.out full-lyrics.txt && echo "xmas1 matches"
	@diff -Bqw 2.out full-lyrics.txt && echo "xmas2 matches"
	@diff -Bqw 3.out full-lyrics.txt && echo "xmas3 matches"
	@diff -Bqw 4.out full-lyrics.txt && echo "xmas4 matches"
	@diff -Bqw 5.out full-lyrics.txt && echo "xmas5 matches"
	@diff -Bqw 6.out full-lyrics.txt && echo "xmas6 matches"
	@diff -Bqw 7.out full-lyrics.txt && echo "xmas7 matches"
	@diff -Bqw 8.out full-lyrics.txt && echo "xmas8 matches"
	@diff -Bqw 9.out full-lyrics.txt && echo "xmas9 matches"
	@diff -Bqw 10.out full-lyrics.txt && echo "xmas10 matches"
