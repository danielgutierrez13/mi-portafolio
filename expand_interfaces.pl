#!/usr/bin/perl
use strict;
use warnings;

local $/;
while (<ARGV>) {
    # Expand single-line interfaces to multi-line with readonly
    s{(interface\s+\w+[^{\n]*\{)([^}\n]+)\}}{
        my ($head, $body) = ($1, $2);
        my @props = grep { /\S/ } split(/;\s*/, $body);
        my $expanded = '';
        for my $prop (@props) {
            $prop =~ s/^\s+|\s+$//g;
            $prop = "readonly $prop" unless $prop =~ /^readonly /;
            $expanded .= "\n  $prop;";
        }
        "$head$expanded\n}"
    }ge;
    print;
}
