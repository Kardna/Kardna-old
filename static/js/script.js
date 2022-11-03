
$(function(){
    var list = ['Search The Internet!',
                              'Search Anything!',
                              'Search Kardna.xyz!',
                              'Dont Cheat ;)',
                              'Search For Ganms!',
                              'These are random!',
                              'Focus On Your Work.',
                              'Kardna Is Almost 1 year old.',
                              'Do Your Homework!',
                              'Dont Be Mad When The Teacher Closes The Tab.',
                              'None Of These Are More Rare Then The Others.',
                              'November 28th, 2022 Servers Shut Down.',
                              'BlitzIsKool Is Not Cool :(',
                              'Idk What Games To Add.'                   
                            ],
        r = Math.floor(Math.random() * list.length);
    $('#placeholder').prop('placeholder',list[r]);
  });
